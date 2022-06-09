import "./glow_productpage.css";

function Dropdown(props) {
  return (
    <div>
      <div class="btn-group">
        <button
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          className="filter-sort"
        >
          {props.name}
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">
            {props.nm1}
          </a>
          <a class="dropdown-item" href="#">
            {props.nm2}
          </a>
          <a class="dropdown-item" href="#">
            {props.nm3}
          </a>
          <a class="dropdown-item" href="#">
            {props.nm4}
          </a>
          <a class="dropdown-item" href="#">
            {props.nm5}
          </a>
          <a class="dropdown-item" href="#">
            {props.nm6}
          </a>
          <a class="dropdown-item" href="#">
            {props.nm7}
          </a>
          <a class="dropdown-item" href="#">
            {props.nm8}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
