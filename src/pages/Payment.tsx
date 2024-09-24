import React, { useState } from 'react';
import 'dotenv/config';
// @ts-ignore
import pagarme from 'pagarme';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardExpirationDate, setCardExpirationDate] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  console.log("🚀 ~ handlePayment ~ process.env.API_KEY:", process.env.API_KEY)

  const handlePayment = async () => {
    const card = {
      card_number: cardNumber.replace(/\s+/g, ''),
      card_holder_name: cardHolderName,
      card_expiration_date: cardExpirationDate.replace('/', ''),
      card_cvv: cardCvv,
    };
    console.log("🚀 ~ handlePayment ~ card:", card)

    try {
      const cardHash = await pagarme.client.connect({ encryption_key: process.env.API_KEY })
        .then((client: any) => client.security.encrypt(card));
      console.log("🚀 ~ handlePayment ~ cardHash:", cardHash)
    } catch (error) {
      console.error('Erro ao gerar o hash do cartão:', error);
    }
  };

  return (
    <form onSubmit={handlePayment}>
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
