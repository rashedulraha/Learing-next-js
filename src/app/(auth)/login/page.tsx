import type { Metadata } from "next";

type Props = {
  params: {
    productsId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  return {
    title: `${(params.productsId = "Login")} Page`,
    description: `Please Login ${params.productsId}`,
  };
};

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
}
