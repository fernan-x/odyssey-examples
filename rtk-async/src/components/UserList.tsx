import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../store/store"
import { useEffect } from "react"
import { fetchUsers } from "../store/userSlice"

export default function UserList() {
    const dispatch = useDispatch<AppDispatch>()
    const { users, status, error } = useSelector((state: RootState) => state.user)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch]);

    if (status === 'loading') {
        return <span>Loading...</span>
    }

    if (status === 'failed') {
        return <span>Failed to load users: {error}</span>
    }

    return (
        <div>
            <h2>User list</h2>
            {users.map((user) => (
                <div key={user.id}>
                    {user.name}
                </div>
            ))}
            {users.length === 0 && <span>No users</span>}
        </div>
    )
}