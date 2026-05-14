const Perfil = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#1b2838" }}
    >
      <div className="row gap-4">
        {/* CARD DO PERFIL */}
        <div className="col-auto">
          <div
            className="card p-4 text-center shadow-sm border-0"
            style={{ backgroundColor: "#0f1822" }}
          >
            <h5 className="fw-bold mb-1 text-light">@NomeQueAparece</h5>
            <p className="text-light small">@NomeDeUsuário</p>

            <img
              src="https://placehold.co/300x300"
              alt="perfil"
              className="rounded-circle mx-auto my-4"
            />

            <button
              className="btn btn-danger btn-sm mb-3"
              style={{ fontSize: "12px" }}
            >
              Editar Foto de Perfil
            </button>

            <button
              className="btn btn-danger btn-sm mb-3"
              style={{ fontSize: "12px" }}
            >
              Editar Status
            </button>

            <small className="text-light">
              Membro Desde: Programar a Data que Entrou eeeee
            </small>
          </div>
        </div>

        {/* FORMULÁRIO */}
        <div className="col-auto">
          <div
            className="card p-4 shadow-sm border-0"
            style={{ width: "500px", backgroundColor: "#0f1822" }}
          >
            <h3 className="fw-bold mb-4 text-light">Editar Perfil</h3>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label text-light">
                  Nome Que Aparece
                </label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label text-light">Nome de Usuário</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label text-light">Nova Senha</label>
                <input type="password" className="form-control" />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label text-light">
                  Confirmar Nova Senha
                </label>
                <input type="password" className="form-control" />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label text-light">Novo Email</label>
                <input type="email" className="form-control" />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label text-light">
                  Confirmar Novo Email
                </label>
                <input type="email" className="form-control" />
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <button
                className="btn btn-danger mt-3"
                style={{ width: "140px" }}
              >
                Atualizar o Perfil
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
