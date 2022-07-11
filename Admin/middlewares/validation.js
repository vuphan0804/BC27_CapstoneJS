// Validation

// Validation
const name = document.getElementById("name").value;
const price = document.getElementById("price").value;
const screen = document.getElementById("screen").value;
const backCamera = document.getElementById("backCamera").value;
const frontCamera = document.getElementById("frontCamera").value;
const img = +document.getElementById("img").value;
const desc = document.getElementById("desc").value;
const type = document.getElementById("type").value;
let isValid = true;
const validation = {
  validationAdd: (product) => {
    //Name Validation
    const nameNotiEl = document.getElementById("nameNoti");
    if (!isRequired(name)) {
      isValid = false;
      nameNotiEl.innerHTML = "Tên sản phẩm không được để trống";
      nameNotiEl.style = "display:block";
    } else if (!minLength(name, 4)) {
      isValid = false;
      nameNotiEl.innerHTML = "Tên sản phẩm phải có ít nhất 4 ký tự";
      nameNotiEl.style = "display:block";
    } else {
      nameNotiEl.innerHTML = "";
      nameNotiEl.style = "display:none";
    }
    // Price Validation
    const priceNotiEl = document.getElementById("priceNoti");
    if (!isRequired(price)) {
      isValid = false;
      priceNotiEl.innerHTML = "Giá sản phẩm không được để trống";
      priceNotiEl.style = "display:block";
    } else {
      priceNotiEl.innerHTML = "";
      priceNotiEl.style = "display:none";
    }

    //Screen Validation
    const screenNotiEl = document.getElementById("screenNoti");
    if (!isRequired(screen)) {
      isValid = false;
      screenNotiEl.innerHTML = "Màn hình không được để trống";
      screenNotiEl.style = "display:block";
    } else {
      screenNotiEl.innerHTML = "";
      screenNotiEl.style = "display:none";
    }
    //Back Camera Validation
    const backCameraNotiEl = document.getElementById("backCameraNoti");
    if (!isRequired(backCamera)) {
      isValid = false;
      backCameraNotiEl.innerHTML = "Camera sau không được để trống";
      backCameraNotiEl.style = "display:block";
    } else {
      backCameraNotiEl.innerHTML = "";
      backCameraNotiEl.style = "display:none";
    }

    // Front Camera Validation
    const frontCameraNotiEl = document.getElementById("frontCameraNoti");
    if (!isRequired(frontCamera)) {
      isValid = false;
      frontCameraNotiEl.innerHTML = "Camera trước không được để trống";
      frontCameraNotiEl.style = "display:block";
    } else {
      frontCameraNotiEl.innerHTML = "";
      frontCameraNotiEl.style = "display:none";
    }

    // Image Validation
    const imgNotiEl = document.getElementById("imgNoti");
    if (!isRequired(img)) {
      isValid = false;
      imgNotiEl.innerHTML = "Hình ảnh không được để trống";
      imgNotiEl.style = "display:block";
    } else {
      imgNotiEl.innerHTML = "";
      imgNotiEl.style = "display:none";
    }

    // Description
    const descNotiEl = document.getElementById("descNoti");
    if (!isRequired(desc)) {
      isValid = false;
      descNotiEl.innerHTML = "Mô tả không được để trống";
      descNotiEl.style = "display:block";
    } else if (!maxLength(desc, 60)) {
      isValid = false;
      descNotiEl.innerHTML = "Mô tả không vượt quá 60 ký tự";
      descNotiEl.style = "display:block";
    } else {
      descNotiEl.innerHTML = "";
      descNotiEl.style = "display:none";
    }

    // Type product
    const typeNotiEl = document.getElementById("typeNoti");
    if (!isRequired(type)) {
      isValid = false;
      typeNotiEl.innerHTML = "Loại sản phẩm không được để trống";
      typeNotiEl.style = "display:block";
    } else {
      typeNotiEl.innerHTML = "";
      typeNotiEl.style = "display:none";
    }

    // Finally
    return isValid;
  },

  validationUpdate: (product) => {
    //Name Validation
    const nameNotiEl = document.getElementById("nameNoti");
    if (!isRequired(name)) {
      isValid = false;
      nameNotiEl.innerHTML = "Tên sản phẩm không được để trống";
      nameNotiEl.style = "display:block";
    } else if (!minLength(name, 4)) {
      isValid = false;
      nameNotiEl.innerHTML = "Tên sản phẩm phải có ít nhất 4 ký tự";
      nameNotiEl.style = "display:block";
    } else {
      nameNotiEl.innerHTML = "";
      nameNotiEl.style = "display:none";
    }
    // Price Validation
    const priceNotiEl = document.getElementById("priceNoti");
    if (!isRequired(price)) {
      isValid = false;
      priceNotiEl.innerHTML = "Giá sản phẩm không được để trống";
      priceNotiEl.style = "display:block";
    } else {
      priceNotiEl.innerHTML = "";
      priceNotiEl.style = "display:none";
    }

    //Screen Validation
    const screenNotiEl = document.getElementById("screenNoti");
    if (!isRequired(screen)) {
      isValid = false;
      screenNotiEl.innerHTML = "Màn hình không được để trống";
      screenNotiEl.style = "display:block";
    } else {
      screenNotiEl.innerHTML = "";
      screenNotiEl.style = "display:none";
    }
    //Back Camera Validation
    const backCameraNotiEl = document.getElementById("backCameraNoti");
    if (!isRequired(backCamera)) {
      isValid = false;
      backCameraNotiEl.innerHTML = "Camera sau không được để trống";
      backCameraNotiEl.style = "display:block";
    } else {
      backCameraNotiEl.innerHTML = "";
      backCameraNotiEl.style = "display:none";
    }

    // Front Camera Validation
    const frontCameraNotiEl = document.getElementById("frontCameraNoti");
    if (!isRequired(frontCamera)) {
      isValid = false;
      frontCameraNotiEl.innerHTML = "Camera trước không được để trống";
      frontCameraNotiEl.style = "display:block";
    } else {
      frontCameraNotiEl.innerHTML = "";
      frontCameraNotiEl.style = "display:none";
    }

    // Image Validation
    const imgNotiEl = document.getElementById("imgNoti");
    if (!isRequired(img)) {
      isValid = false;
      imgNotiEl.innerHTML = "Hình ảnh không được để trống";
      imgNotiEl.style = "display:block";
    } else {
      imgNotiEl.innerHTML = "";
      imgNotiEl.style = "display:none";
    }

    // Type product
    const typeNotiEl = document.getElementById("typeNoti");
    if (loaiND === "default") {
      isValid = false;
      typeNotiEl.innerHTML = "Loại sản phẩm không được để trống";
      typeNotiEl.style = "display:block";
    } else {
      typeNotiEl.innerHTML = "";
      typeNotiEl.style = "display:none";
    }

    // Description
    const descNotiEl = document.getElementById("descNoti");
    if (!isRequired(desc)) {
      isValid = false;
      descNotiEl.innerHTML = "Mô tả không được để trống";
      descNotiEl.style = "display:block";
    } else if (!maxLength(desc, 60)) {
      isValid = false;
      descNotiEl.innerHTML = "Mô tả không vượt quá 60 ký tự";
      descNotiEl.style = "display:block";
    } else {
      descNotiEl.innerHTML = "";
      descNotiEl.style = "display:none";
    }
    // Finally
    return isValid;
  },
  isRequired: (value) => {
    if (!value) {
      return false;
    }

    return true;
  },

  minLength: (value, limit) => {
    if (value.length < limit) {
      return false;
    }

    return true;
  },

  maxLength: (value, limit) => {
    if (value.length > limit) {
      return false;
    }

    return true;
  },

  duplicateTest: (value) => {
    for (let i = 0; i < productList.length; i++) {
      if (value === productList[i].name) {
        return false;
      }
    }

    return true;
  },
};

export default validation;
