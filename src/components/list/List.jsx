import { useContext } from "react";
import Goal from "../Goal/Goal";
import { ContextGoals } from "../../services/Memory";
import { Outlet } from "react-router-dom";

const List = () => {
    const [state, dispatch] = useContext(ContextGoals);
    return (
        <>
            {state.order.map((id) => (
                <Goal key={id} {...state.objects[id]} />
            ))}
            <Outlet />
        </>
    );
};

export default List;
