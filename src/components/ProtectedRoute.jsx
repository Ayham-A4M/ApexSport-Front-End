import { Navigate } from "react-router-dom";
import React, { useContext } from "react"
import { User } from "../App"
const ProtectedRoute = React.memo(({ children, requiredRoles }) => {
    const user = useContext(User);
    if (user.user === undefined) {
        return <Navigate to={'/'} replace />
    }

    if (!requiredRoles.includes(user?.user?.Role) || !user?.user?.Role) {
        return <Navigate to={'/unauthorized'} replace />
    }
    return children

}
)

export default ProtectedRoute