import React from "react";

export const Spinner = () => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <img src="https://media4.giphy.com/media/jAYUbVXgESSti/200w.webp?cid=ecf05e47ccfd3j1z9bk7l9jkw7dwgqq2lsh2bhmayxsj1789&ep=v1_gifs_search&rid=200w.webp&ct=g" />
      <div className="text-2xl font-bold text-bgDark">Loading...</div>
    </div>
  );
};

export default Spinner;
