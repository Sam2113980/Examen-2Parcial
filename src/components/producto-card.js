import { LitElement, html, css } from "lit";

class ProductoCard extends LitElement {

  static properties = {
    producto: { type: String },
    cantidad: { type: Number }
  };

  constructor() {
    super();
    this.producto = "";
    this.cantidad = 1;
    this.precio = 500;
  }

  cambiarProducto(e) {
    this.producto = e.target.value;
  }

  aumentar() {
    this.cantidad++;
  }

  disminuir() {
    if (this.cantidad > 1) {
      this.cantidad--;
    }
  }

  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      margin-top: 0px;
      font-family: Arial, sans-serif;
    }

    .card {
      width: 300px;
      padding: 20px;
      border-radius: 15px;
      background: white;
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    }

    h2 {
      text-align: center;
      margin-bottom: 15px;
      color: #333;
    }

    input {
      width: 100%;
      padding: 10px;
      border-radius: 8px;
      border: 1px solid #ccc;
      font-size: 14px;
      margin-bottom: 15px;
    }

    .info {
      margin: 6px 0;
      color: #555;
    }

    .precio {
      color: #e5952cff;
      font-weight: bold;
    }

    .botones {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin: 15px 0;
    }

    button {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      border: none;
      font-size: 20px;
      color: white;
      cursor: pointer;
      background: #238287ff;
    }

    button:hover {
      background: #2885a4ff;
    }

    .total {
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      color: #28a745;
      margin-top: 10px;
    }
  `;

  render() {
    return html`
      <div class="card">
        <h2>Productos</h2>

        <input 
          type="text"
          placeholder="Ingrese el producto"
          @input=${this.cambiarProducto}
        >

        <p class="info">Producto: <strong>${this.producto}</strong></p>
        <p class="info precio">Precio unitario: $${this.precio}</p>
        <p class="info">Cantidad: ${this.cantidad}</p>

        <div class="botones">
          <button @click=${this.aumentar}>+</button>
          <button @click=${this.disminuir}>-</button>
        </div>

        <div class="total">
          Total: $${this.precio * this.cantidad}
        </div>
      </div>
    `;
  }
}

customElements.define("producto-card", ProductoCard);
