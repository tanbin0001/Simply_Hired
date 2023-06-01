import React from 'react';

const Blog = () => {
    return (
        <div>
            <section>
                <h1 className="text-4xl font-serif font-bold text-center lg:my-5">
                    Important<span className="text-orange-400"> Questions</span>
                </h1>

                <div className="hero mt-11  lg:bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://www.qed42.com/sites/default/files/styles/featured_image/public/2020-05/Context%20API%20in%20React%20with%20Hooks.webp?itok=h4vYS5Cg" className="w-[370px] rounded-lg shadow-2xl" />
                        <div className="">
                            <h1 className="text-2xl font-bold">
                                1. when should u use  ContextApi ?
                            </h1>
                            <p className="py-4">  React has a feature called Context API that makes it possible to pass data down the component tree without having to explicitly supply props at each level. It can be helpful in a range of situations, including:

                                Theming: To pass the theme down the component tree in a multi-theme application, you can utilize the Context API.


                                Authentication: You can use Context API to transfer user information down the component tree in applications that need authentication.

                                Language preference: If your application supports multiple languages, you may transmit the language preference down the component tree using the Context API.

                                State management: You can utilize Context API to handle the state if your application is huge and has a sophisticated state management system.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="hero mt-36 lg:bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="https://diarybydhanushka.dev/wp-content/uploads/2020/02/custom-hooks.png" className="w-[370px] rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-2xl font-bold  mb-2">
                                2. what is custom hook?
                            </h1>
                            <p>
                                A custom hook is a JavaScript function in React that allows you to reuse stateful logic across multiple components. It's a way to abstract away common functionality so that it can be easily shared and reused.

                                Custom hooks can be created using the "use" prefix and can include any React hook, as well as any other custom hooks. For example, you can create a custom hook that uses the useState hook to manage a piece of state across multiple components, or a custom hook that uses the useEffect hook to manage side effects.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="hero lg:mt-36 lg:bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://www.developerdiary.in/wp-content/uploads/2022/10/useRef-Hooks-930x620.jpg" className="w-[370px] rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-3xl font-bold">
                                3. what is useRef?
                            </h1>
                            <p className="py-6">
                                useRef is a hook provided by React that allows you to create a mutable reference to an element in the component. You can think of it as a way to "hang onto" a reference to a specific element so that you can access it later.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="hero lg:mt-36 lg:bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*1qTMhe4r4n9-_ZMae6-agQ.jpeg" className="w-[370px] rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-3xl font-bold">
                                4. what is useMemo?
                            </h1>
                            <p className="py-6">
                                useMemo is a hook provided by React that allows you to memoize expensive computations so that they're only re-executed when necessary. It's a way to optimize the performance of your application by avoiding unnecessary re-computations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Blog;