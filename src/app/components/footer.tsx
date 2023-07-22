export default function Footer() {
  return (
    <div className="bg-neutral-900 w-[100vw] mt-20">
      <p className="w-[100vw] text-neutral-50 p-2 text-center mt-10">
        © 2023 El-Razin Jo
      </p>
      <div className="text-center">

        <p className="text-lg">
          I am open for projects, job opportunity, speaks or a chat
        </p>
        <p>Would love to hear from you!</p>
      </div>
      <p className="text-2xl font-bold m-5 text-center mt-10">Get in touch</p>
      <div className="flex gap-2 place-content-center ">
        <a
          className="hover:text-indigo-600"
          href="https://www.linkedin.com/in/elrazinjo/"
          target="_blank"
        >
          LinkedIn
        </a>
        |
        <a
          className="hover:text-indigo-600"
          href="https://github.com/xinjo21"
          target="_blank"
        >
          Github
        </a>
        |
        <a
          className="hover:text-indigo-600"
          href="https://fb.com/xinjo21"
          target="_blank"
        >
          Facebook
        </a>
        |
        <a
          className="hover:text-indigo-600"
          href="https://www.instagram.com/xinjo_/"
          target="_blank"
        >
          Instagram
        </a>
        |
        <a
          className="hover:text-indigo-600"
          href="http://be.net/xinjo21"
          target="_blank"
        >
          Behance
        </a>
      </div>
      <div className="flex flex-col text-center my-5">
        <p className="text-center mb-10 text-xl">
          <a className="text-indigo-500" href="mailto:elrazinmjo@gmail.com">
            elrazinmjo@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

/* export default function Footer() {
  return (
    <div className="bg-neutral-900 w-[100vw] mt-20">
      <p className="text-2xl font-bold m-5 text-center mt-10">Contact</p>
      <div className="flex gap-2 place-content-center ">
        <a
          className="hover:text-indigo-600"
          href="https://www.linkedin.com/in/elrazinjo/"
          target="_blank"
        >
          LinkedIn
        </a>
        |
        <a
          className="hover:text-indigo-600"
          href="https://github.com/xinjo21"
          target="_blank"
        >
          Github
        </a>
        |
        <a
          className="hover:text-indigo-600"
          href="https://fb.com/xinjo21"
          target="_blank"
        >
          Facebook
        </a>
        |
        <a
          className="hover:text-indigo-600"
          href="https://www.instagram.com/xinjo_/"
          target="_blank"
        >
          Instagram
        </a>
        |
        <a
          className="hover:text-indigo-600"
          href="http://be.net/xinjo21"
          target="_blank"
        >
          Behance
        </a>
      </div>
      <div className="flex flex-col text-center my-5">
        <p className="text-lg">
          I am open for projects, job opportunity, speaks or a chat
        </p>
        <p>Would love to hear from you!</p>

        <p className="text-center mt-5 text-xl">
          Reach me through:{" "}
          <a className="text-indigo-500" href="mailto:elrazinmjo@gmail.com">
            elrazinmjo@gmail.com
          </a>
        </p>
      </div>
      <div className="w-[100vw] bg-neutral-800 text-neutral-50 p-2">
        © 2023 El-Razin Jo. All rights reserved.
      </div>
    </div>
  );
}
 */
