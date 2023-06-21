import { useEffect } from "preact/hooks";

import Avatar from "../base/Avatar.tsx";
import { useSignal } from "@preact/signals";
import { ObjectId } from "mongoDB";

export default function Review() {
  const contentOfUser = useSignal<
    { _id: ObjectId; fullName: string; comment: string }[]
  >([]);
  useEffect(() => {
    async function loadContent() {
      const res = await fetch("http://localhost:8000/api/user");
      const data = await res.json();

      contentOfUser.value = data;
    }
    loadContent();
  }, []);

  return (
    <div
      class={"md:(max-w-4xl h-[250px] bg-gradient-to-r from-violet-200 to-pink-200 border border-gray-500 my-4 rounded overflow-y-auto)"}
    >
      {contentOfUser.value
        ? contentOfUser.value.map((user) => (
          <div
            class={"px-6 pt-10 pb-8 max-w-xl mx-auto mt-5 flex gap-x-3 items-center border-b border-gray-400 bg-white rounded"}
            style={{
              boxShadow:
                "inset 6px 6px 10px 0 rgba(0,0,0,0.2),inset -6px -6px 10px 0 rgba(255,255,255,0.5)",
            }}
            key={user._id}
          >
            <Avatar />
            <div>
              <h1
                class={"text-lg font-bold font-montserrat italic text-gray-500"}
              >
                {user.fullName}
              </h1>
              <p>{user.comment}</p>
            </div>
          </div>
        ))
        : <p>Please give your opinion about my protfolio from Feedback Tab</p>}
    </div>
  );
}
