import user from "@/fake/user.json";

class AuthService {
    async get(data) {
        const getUser = user.filter(
            item => item.email === data.email && item.password === data.password
        );
        if (getUser[0] === undefined) {
            throw new Error("User not found");
        }
        return getUser;
    }
}

export default AuthService;
