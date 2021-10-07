import {ReactNode} from "react";
import {useCookies} from "react-cookie";

const Auth = ({ children }: {children: ReactNode}) => {
    const [sessionCookie] = useCookies(['sessionCookie']);
    console.log(sessionCookie);

    if (sessionCookie) {
        return <div>{children}</div>;
    }

    return (
        <div>
            Route is private
        </div>
    );
}


export default Auth;