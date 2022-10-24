import React from "react";
import AddingBook from "../components/bookAdding/AddingBook";
import { useAuthContext } from "../components/store/useAuthContext";


const Adding = () => {
  const {user}=useAuthContext ();

  return (
    <div className="bg-[#2c3562] pt-[5rem] ">
      <AddingBook uid={user.uid}/>
    </div>
  );
};

export default Adding;
