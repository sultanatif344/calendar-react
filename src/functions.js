import axios from "axios";

let filesList = [];
export const ShowAlert = (id) => {
  const alert = document.getElementById(id);
  alert.style.visibility = "visible";
  alert.style.transform = "translateY(0)";
  alert.style.opacity = 1;
};

export const HideAlert = (id) => {
  const alert = document.getElementById(id);
  alert.style.visibility = "hidden";
  alert.style.transform = "translateY(1.25rem)";
  alert.style.opacity = 0;
};

export const ToggleDropdownMenu = (id) => {
  const dropdown = document.getElementById(id);

  if (dropdown.style.maxHeight) {
    dropdown.style.maxHeight = null;
    dropdown.style.overflow = "hidden";
  } else {
    dropdown.style.maxHeight = dropdown.scrollHeight + "px";
    setTimeout(() => {
      dropdown.style.overflow = "visible";
    }, 100);
  }
};

export const ShowModal = (id) => {
  const modal = document.getElementById(id);

  modal.style.opacity = 1;
  modal.style.transform = "translate(-50%, 0)";
  modal.style.visibility = "visible";
};

export const HideModal = (id) => {
  const modal = document.getElementById(id);

  modal.style.opacity = 0;
  modal.style.transform = "translate(-50%, 1.25rem)";
  modal.style.visibility = "hidden";
};

export const ShowScaleModal = (id) => {
  const modal = document.getElementById(id);

  modal.style.visibility = "visible";
  modal.style.transform = "scale(1)";
  modal.style.opacity = 1;
};

export const HideScaleModal = (id) => {
  const modal = document.getElementById(id);

  modal.style.visibility = "hidden";
  modal.style.transform = "scale(0)";
  modal.style.opacity = 0;
};

export const ToggleSelectMenu = (id) => {
  const select = document.getElementById(id);

  if (select.style.display === "none") {
    select.style.display = "block";
  } else {
    select.style.display = "none";
  }
};

export const CloseSelectMenu = (id) => {
  const select = document.getElementById(id);

  select.style.display = "none";
};

export const SelectAllCheckboxes = (name) => {
  const checkboxes = document.getElementsByName(name);

  checkboxes.forEach((checkbox) => {
    checkbox.checked = true;
  });
};

export const DeselectAllCheckboxes = (name) => {
  const checkboxes = document.getElementsByName(name);

  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
};

export const ToggleCurrentCheckbox = (id) => {
  const checkbox = document.getElementById(id);

  if (checkbox.checked) {
    checkbox.checked = false;
  } else {
    checkbox.checked = true;
  }
};

export const AddLoaderToBtn = (id) => {
  const btn = document.getElementById(id);

  btn.innerHTML = `<svg class='animate-spin mx-auto text-2xl' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"></path></svg>`;
};

// export const uploadFileProgress = (name, uploadedArea, progressArea) => {
//   let fileLoaded = Math.floor((loaded / total) * 100);
//   let fileTotal = Math.floor(total / 1000);
//   let fileSize;
//   fileTotal < 1024
//     ? (fileSize = fileTotal + " KB")
//     : (fileSize = (loaded / (1024 * 1024)).toFixed(2) + " MB");
//   let progressHTML = `<li class="flex flex-row">
//                                 <div class="content">
//                                   <div class="details">
//                                     <span class="name">${name} • Uploading</span>
//                                     <span class="percent">${fileLoaded}%</span>
//                                   </div>
//                                   <div class="progress-bar">
//                                     <div class="progress" style="width: ${fileLoaded}%"></div>
//                                   </div>
//                                 </div>
//                               </li>`;
//   uploadedArea.classList.add("onprogress");
//   progressArea.innerHTML = progressHTML;
//   if (loaded == total) {
//     progressArea.innerHTML = "";
//     let uploadedHTML = `<li class="flex-row">
//                                   <div class="content upload">
//                                     <i class="fas fa-file-alt"></i>
//                                     <div class="details">
//                                       <span class="name">${name} • Uploaded</span>
//                                       <span class="size">${fileSize}</span>
//                                     </div>
//                                   </div>
//                                   <i class="fas fa-check"></i>
//                                 </li>`;
//     uploadedArea.classList.remove("onprogress");
//     uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML);
//   }
// };
export const uploadFile = (progressId, uploadedId, fileuploadarea, input) => {
  const form = document.querySelector(fileuploadarea);
  const progressArea = document.querySelector(progressId);
  const uploadedArea = document.querySelector(uploadedId);
  const fileInput = document.querySelector(input);
  form.addEventListener("click", () => {
    if (fileInput != null) {
      fileInput.click();
    }
  });

  fileInput.onchange = ({ target }) => {
    let files = target.files;
    console.log(files);
    if (files) {
      filesList = files;
      // if (fileName.length >= 12) {
      // let splitName = fileName.split(".");
      // fileName = splitName[0].substring(0, 13) + "... ." + splitName[1];
      // }
      // uploadFileProgress(fileName, uploadedArea, progressArea);
    }
  };
};

export const submitFiles = (selectedFileFunction, handleChangeFunction) => {
  // uploadFunction(selectedFileFunction, file);
  if (filesList.length > 0) {
    handleChangeFunction(selectedFileFunction, filesList);
  }
};
