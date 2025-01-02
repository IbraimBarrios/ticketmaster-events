const wrapPromise = (promise) => {
  let status = "pending";
  let result;

  let suspender = promise
    .then((r) => {
      status = "success";
      result = r;
    })
    .catch((error) => {
      status = "error";
      result = error;
    });

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};

export default wrapPromise;
