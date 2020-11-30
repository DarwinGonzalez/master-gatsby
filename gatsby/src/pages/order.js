import React from 'react';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';

export default function OrderPage() {
  const { values, updateValue } = useForm({
    name: '',
    email: '',
  });
  return (
    <div>
      <SEO title="Order a pizza!" />
      <form>
        <fieldset>
          <legend>Your info</legend>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={updateValue}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={updateValue}
          />
        </fieldset>
        <fieldset>
          <legend>Menu</legend>
        </fieldset>
        <fieldset>
          <legend>Order</legend>
        </fieldset>
      </form>
    </div>
  );
}
