import FormSignin from "./form-signin";

const Signin = () => {
  return (
    <main className="relative  w-full h-full flex justify-center min-h-[calc(100vh-4.5rem)] mt-15 overflow-hidden bg-[linear-gradient(to_right,transparent_1%,var(--gray-50)_10%,var(--gray-50)_90%,transparent_99%)] py-4 dark:bg-[linear-gradient(to_right,transparent_0%,var(--neutral-950)_10%,var(--neutral-950)_90%,transparent_100%)] md:py-10">
      <div className="container px-4">
        <FormSignin />
      </div>
    </main>
  );
};

export default Signin;
