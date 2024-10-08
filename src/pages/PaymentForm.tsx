import React, { useState } from 'react';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardExpirationDate, setCardExpirationDate] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  const handlePayment = async (e: any) => {
    e.preventDefault();

    const apiKey = process.env.REACT_APP_PAGARME_API_KEY_DEV;
    console.log("🚀 ~ handlePayment ~ apiKey:", apiKey)

    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: `Basic ${apiKey}`
      },
      body: JSON.stringify({
        customer: {name: 'Tony Stark', email: 'avengerstark@ligadajustica.com.br'},
        items: [{amount: 2990, description: 'Chaveiro do Tesseract', quantity: 1}],
        payments: [
          {
            payment_method: 'credit_card',
            credit_card: {
              installments: 1,
              statement_descriptor: 'AVENGERS',
              network_token: {
                number: '4190000000000010',
                holder_name: 'Tony Stark',
                exp_month: 1,
                exp_year: 30,
                cryptograms: ['ANfQt43bddROAAEnSAMhAAADFA===='],
                billing_address: {
                  line_1: '10880, Malibu Point, Malibu Central',
                  zip_code: '90265',
                  city: 'Malibu',
                  state: 'CA',
                  country: 'US'
                }
              }
            }
          }
        ]
      })
    };

    fetch('https://api.pagar.me/core/v5/orders', options)
      .then(response => response.json())
      .then(response => console.log('response', response))
      .catch(err => console.error('err', err));
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
