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
  alert.style.opacity = 0.5;
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

export const ToggleSelectMenu = (id) => {
  const select = document.getElementById(id);

  if (select.style.display === "none") {
    select.style.display = "block";
  } else {
    select.style.display = "none";
  }
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
