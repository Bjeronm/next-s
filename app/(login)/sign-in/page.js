import { Login } from "@/lib/actions";

const SignInPage = () => {
    return (
        <div className=" w-[350px] p-4 h-[250px] mx-auto bg-white mt-10">
            <form className="flex flex-col gap-2 mt-16" action={Login}>
                <input placeholder="username" name="username" className="p-2 border-2 border-gray-400" required />
                <input placeholder="password" name="password" required className=" p-2 border-2 border-gray-400" />
                <button className="bg-blue-600 py-2 w-full">Enviar</button>
            </form>
        </div>
    )
}

export default SignInPage;