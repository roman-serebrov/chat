 export default (key, touched, errors, values) => {
    if (touched[key]) {
        if(!values[key]) {
            return "error";
        }
        if (errors[key]) {
            return "error";
        } else {
            return "success";
        }
    } else {
      return "";
    }
  };