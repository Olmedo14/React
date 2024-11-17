import "./formcheckout.css"

const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
    return (
      <form onSubmit={handleSubmitForm} className="form-main">
        <label className="form-info">Nombre completo</label>
        <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} />
  
        <label className="form-info">Telefono</label>
        <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} />
  
        <label className="form-info">Email</label>
        <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} />
  
        <button type="submit" className="form-btn">Enviar mi orden</button>
  
      </form>
    )
  }
  export default FormCheckout