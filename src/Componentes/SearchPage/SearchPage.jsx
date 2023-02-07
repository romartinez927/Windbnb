export default function SearchPage() {
    return (
        <div>
            <form>
                <input type="text" placeholder="Add guests"></input>
                <ul>
                    <li>
                        <label>Helsinki</label>
                        <input type="radio" id="helsinki" name="meal" value="helsinki" />
                    </li>
                    <li>
                        <label>Turku</label>
                        <input type="radio" id="turku" name="meal" value="turku" />
                    </li>
                    <li>
                        <label>Oulu</label>
                        <input type="radio" id="oulu" name="meal" value="oulu" />
                    </li>
                    <li>
                        <label>Vaasa</label>
                        <input type="radio" id="vaasa" name="meal" value="vaasa" />
                    </li>
                </ul>
                <button type="submit">Buscar</button>
            </form>
        </div>
    )
}