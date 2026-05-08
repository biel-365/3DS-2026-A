import React from "react";

const PromoCard = (props) => {
  const precoComDesconto = props.preco - (props.preco * props.desconto) / 100;

  return (
    <div
      id="PromoCard"
      className="promoCard card border-0 overflow-hidden h-100"
    >
      <img
        className="card-img-top object-fit-cover"
        src={props.imagem}
        height={280}
        alt="Titulo do jogo"
      />

      <div className="card-body d-flex flex-column gap-3 p-3">
        <h5
          data-bs-toggle="tooltip"
          title={props.titulo}
          className="card-title text-uppercase text-truncate fw-bold text-light"
        >
          {props.titulo}
        </h5>

        <div className="row g-0 align-items-stretch">
          <span className="desconto col-6 d-flex align-items-center justify-content-center fw-bold fs-4 py-2">
            -{props.desconto}%
          </span>

          <div className="col-6 bg-dark d-flex flex-column justify-content-center px-2 py-2">
            <p className="m-0 text-end text-secondary text-decoration-line-through small">
              <small>{props.precoFormatado}</small>
            </p>

            <p className="corValor m-0 fs-5 text-end fw-bolder text-nowrap">
              {props.formatarMoeda(precoComDesconto)}
            </p>
          </div>
        </div>

        <button
          id="addCarrinho"
          className="btn btn-success desconto text-light w-100 border-0 py-2 fw-bold"
          onClick={props.onAddCarrinho}
        >
          <i className="bi bi-cart-plus me-2"></i>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default PromoCard;
