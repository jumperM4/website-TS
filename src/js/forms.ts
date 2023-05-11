//import checkNumInputs from "./checkNumInputs";

const forms = () => {
  const forms = document.querySelectorAll("form");
  const inputs = document.querySelectorAll("input");
  const upload: NodeListOf<HTMLInputElement> =
    document.querySelectorAll('[name="upload"]');

  //checkNumInputs('input[name="user_phone"]');

  const message = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро мы с Вами свяжемся",
    failure: "Что-то пошло не так...",
    spinner: "assets/img/spinner.gif",
    ok: "assets/img/ok.png",
    fail: "assets/img/fail.png",
  };

  const postData = async (url: string, data: string) => {
   
    const result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: data,
    });
    return await result;
  };

  const clearInputs = () => {
    inputs.forEach((input) => {
      input.value = "";
    });
    upload.forEach((item) => {
      if (item.previousElementSibling) {
        item.previousElementSibling.textContent = "Файл не выбран";
      }
    });
  };

  upload.forEach((item) => {
    item.addEventListener("input", () => {
      if (item.files) {
        const [fileName, fileExt] = item.files[0].name.split(".");
        console.log(fileName, fileExt);
        let dots: string = fileName.length > 5 ? "..." : ".";
        const name = fileName.substring(0, 6) + dots + fileExt;
        console.log(item.previousElementSibling);
        (item.previousElementSibling as Element).textContent = name;
      }
    });
  });

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      form.parentNode?.appendChild(statusMessage);

      form.classList.add("animated", "fadeOutUp");
      setTimeout(() => {
        form.style.display = "none";
      }, 400);

      const statusImg = document.createElement("img");
      statusImg.setAttribute("src", message.spinner);
      statusImg.classList.add("animated", "fadeInUp");
      statusMessage.appendChild(statusImg);

      const textMessage = document.createElement("div");
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);

      const formData = new FormData(form);

      const data: any = {};
      formData.forEach((value, key) => (data[key] = value));
      const dataJSON = JSON.stringify(data);

      postData("https://just-server-yo3y.onrender.com/api/data", dataJSON)
        .then(() => {
          statusImg.setAttribute("src", message.ok);
          textMessage.textContent = message.success;
        })
        .catch(() => {
          statusImg.setAttribute("src", message.fail);
          statusMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
            form.style.display = "block";
            form.classList.remove("fadeOutUp");
            form.classList.add("fadeInUp");
          }, 5000);
        });
    });
  });
};

export default forms;
