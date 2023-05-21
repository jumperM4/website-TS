const drop = () => {
  const fileinputs: NodeListOf<HTMLInputElement> =
    document.querySelectorAll("[name='upload']");

  const preventDefaults = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
  };

  ["dragenter", "dragleave", "dragover", "drop"].forEach((eventName) => {
    fileinputs.forEach((input) => {
      input.addEventListener(eventName, preventDefaults, false);
    });
  });

  const highlightON = (item: HTMLInputElement) => {
    if (item) {
      (item.closest(".file_upload") as HTMLElement).style.border =
        "5px solid yellow";
      (item.closest(".file_upload") as HTMLElement).style.background =
        "rgba(0, 0, 0, 0.7)";
    }
  };

  const highlightOFF = (item: HTMLInputElement) => {
    if (item.closest(".file_upload")) {
      (item.closest(".file_upload") as HTMLElement).style.border = "none";
    }
    item.closest(".calc_form")
      ? ((item.closest(".file_upload") as HTMLElement).style.background =
          "#fff")
      : ((item.closest(".file_upload") as HTMLElement).style.background =
          "#ededed");
  };

  ["dragenter", "dragover"].forEach((eventName) => {
    fileinputs.forEach((input) => {
      input.addEventListener(eventName, () => highlightON(input), false);
    });
  });

  ["dragleave", "drop"].forEach((eventName) => {
    fileinputs.forEach((input) => {
      input.addEventListener(eventName, () => highlightOFF(input), false);
    });
  });

  fileinputs.forEach((input) => {
    input.addEventListener("drop", (e: any) => {
      input.files = e.dataTransfer.files;
      if (input.files) {
        const [fileName, fileExt] = input.files[0].name.split(".");
        let dots: string = fileName.length > 5 ? "..." : ".";
        const name = fileName.substring(0, 6) + dots + fileExt;
        const btn = input.closest(".file_upload");
        (btn?.querySelector("button") as HTMLButtonElement).textContent = name;
        // (input.previousElementSibling as Element).textContent = name;
      }
    });
  });
};

export default drop;
