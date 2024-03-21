import styles from "./Details.module.css";
import { useState, useEffect, useContext } from "react";
import { ContextGoals } from "../../../services/Memory";
import { useNavigate, useParams } from "react-router-dom";
const Details = () => {
    const { id } = useParams();

    const frequencyOptions = ["día", "semana", "mes", "año"];
    const icons = ["💻", "🏃‍♂️", "📚", "✈️"];

    const [form, setForm] = useState({
        details: "",
        events: 1,
        period: "semana",
        icon: "🏃‍♂️",
        goal: 52,
        date: "2030-01-01",
        completed: 0,
    });

    const [state, dispatch] = useContext(ContextGoals);

    const { details, events, period, icon, goal, date, completed } = form;
    const onChange = (event, prop) => {
        setForm((e) => ({ ...e, [prop]: event.target.value }));
    };
    const navigate = useNavigate();
    const create = () => {
        dispatch({ type: "create", goal: form });
        navigate("/list");
    };
    const closeWindow = () => {
        navigate("/list");
    };

    const update = () => {
        dispatch({ type: "update", goal: form });
        navigate("/list");
    };
    const deleteGoal = () => {
        dispatch({ type: "delete", id });
        navigate("/list");
    };
    useEffect(() => {
        const metaMemory = state.objects[id];
        if (!id) return;
        if (!metaMemory) {
            return navigate("/404");
        }
        setForm(state.objects[id]);
    }, [id]);

    return (
        <div className="card">
            <form className="p-4">
                <label className="label">
                    Describe tu meta
                    <input
                        className="input"
                        placeholder="ej. 52 caminatas"
                        value={details}
                        onChange={(e) => onChange(e, "details")}
                    />
                </label>
                <label className="label">
                    ¿Con qué frecuencia deseas cumplir tu meta?{" "}
                    <span>(ej. 1 vez a la semana)</span>
                    <div className="flex mb-6">
                        <input
                            type="number"
                            className="input mr-6"
                            value={events}
                            onChange={(e) => onChange(e, "events")}
                        />
                        <select
                            className="input"
                            value={period}
                            onChange={(e) => onChange(e, "period")}
                        >
                            {frequencyOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                </label>
                <label className="label">
                    ¿Cuántas veces deseas completar esta meta?
                    <input
                        className="input"
                        type="number"
                        value={goal}
                        onChange={(e) => onChange(e, "goal")}
                    />
                </label>

                <label className="label">
                    ¿Tienes una fecha límite?
                    <input
                        className="input"
                        type="date"
                        value={date}
                        onChange={(e) => onChange(e, "date")}
                    />
                </label>

                <label className="label">
                    ¿Cuántas veces has completado ya esta meta?
                    <input
                        className="input"
                        type="number"
                        value={completed}
                        onChange={(e) => onChange(e, "completed")}
                    />
                </label>

                <label className="label">
                    Escoge el ícono para la meta
                    <select
                        className="input"
                        value={icon}
                        onChange={(e) => onChange(e, "icon")}
                    >
                        {icons.map((icon) => (
                            <option key={icon} value={icon}>
                                {icon}
                            </option>
                        ))}
                    </select>
                </label>
            </form>
            <div className={styles.botones}>
                {!id && (
                    <button className="button--black" onClick={create}>
                        Crear
                    </button>
                )}
                {id && (
                    <button className="button--black" onClick={update}>
                        Actualizar
                    </button>
                )}
                {id && (
                    <button className="button--black" onClick={deleteGoal}>
                        Borrar
                    </button>
                )}
                <button className="button" onClick={closeWindow}>
                    Cancelar
                </button>
            </div>
        </div>
    );
};
export default Details;
