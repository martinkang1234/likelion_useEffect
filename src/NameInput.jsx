import React, { useState } from "react";

const NameInput = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value); // 입력창의 값을 상태로 저장
  };

  return (
    <div>
      <h2>이름을 입력하세요 ⬇️</h2>
      <input type="text" onChange={handleChange} />
      <p>
        안녕하세요, {name}님!
      </p>
    </div>
  );
}

export default NameInput;