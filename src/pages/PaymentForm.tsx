import React, { useState } from 'react';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardExpirationDate, setCardExpirationDate] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  console.log("🚀 ~ handlePayment ~ process.env.API_KEY:", process.env.REACT_APP_PAGARME_API_KEY_DEV)

  const handlePayment = async (e: any) => {
    e.preventDefault();

    const apiKey = process.env.REACT_APP_PAGARME_API_KEY_DEV;
    console.log("🚀 ~ handlePayment ~ apiKey:", apiKey)
  }

  return (
    <form onSubmit={(e) => handlePayment(e)}>
      <input
        type="text"
        value={cardNumber}
        onChange={e => setCardNumber(e.target.value)}
        placeholder="Número do Cartão"
      />
      <input
        type="text"
        value={cardHolderName}
        onChange={e => setCardHolderName(e.target.value)}
        placeholder="Nome no Cartão"
      />
      <input
        type="text"
        value={cardExpirationDate}
        onChange={e => setCardExpirationDate(e.target.value)}
        placeholder="Data de Expiração"
      />
      <input
        type="text"
        value={cardCvv}
        onChange={e => setCardCvv(e.target.value)}
        placeholder="CVV"
      />
      <button type="submit">Pagar</button>
    </form>
  );
};

export default PaymentForm;
