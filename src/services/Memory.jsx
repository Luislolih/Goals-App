import { createContext, useEffect, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const listaMock = [
    {
        id: "1",
        details: "Correr por 30 minutos",
        period: "día",
        events: 1,
        icon: "🏃",
        goal: 365,
        plazo: "2030-01-01",
        completed: 190,
    },
    {
        id: "2",
        details: "Leer 10 libros por año",
        period: "mes",
        events: 10,
        icon: "📚",
        goal: 10,
        plazo: "2030-01-01",
        completed: 3,
    },
    {
        id: "3",
        details: "Ir al gym todos los días",
        period: "año",
        events: 365,
        icon: "🏋🏽",
        goal: 365,
        plazo: "2030-01-01",
        completed: 340,
    },
];
const memory = localStorage.getItem("goals");
const initialState = memory
    ? JSON.parse(memory)
    : {
          order: [],
          objects: {},
      };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "put": {
            const goals = action.goals;
            const newState = {
                order: goals.map((goal) => goal.id),
                objects: goals.reduce(
                    (object, goal) => ({ ...object, [goal.id]: goal }),
                    {}
                ),
            };
            localStorage.setItem("goals", JSON.stringify(newState));
            return newState;
        }

        case "create": {
            const id = uuidv4();
            const newGoal = { ...action.goal, id };
            const newState = {
                order: [...state.order, id],
                objects: {
                    ...state.objects,
                    [id]: newGoal,
                },
            };
            localStorage.setItem("goals", JSON.stringify(newState));
            return newState;
        }

        case "update": {
            const id = action.goal.id;
            state.objects[id] = {
                ...state.objects[id],
                ...action.goal,
            };
            const newState = { ...state };
            localStorage.setItem("goals", JSON.stringify(newState));
            return newState;
        }

        case "delete": {
            const id = action.id;
            const newOrder = state.order.filter((item) => item !== id);
            delete state.objects[id];

            const newState = {
                order: newOrder,
                objects: state.objects,
            };
            localStorage.setItem("goals", JSON.stringify(newState));
            return newState;
        }
        default:
            return state;
    }
};
// const goals = reducer(initialState, { type: "put", goals: listaMock });
export const ContextGoals = createContext(listaMock);

const Memory = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log("Estado global de objetos:", state.objects);
    return (
        <ContextGoals.Provider value={[state, dispatch]}>
            {children}
        </ContextGoals.Provider>
    );
};

export default Memory;
