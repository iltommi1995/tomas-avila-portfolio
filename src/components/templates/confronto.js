import React, { Component } from 'react';

import { Query } from 'react-apollo'
import { useQuery, gql } from '@apollo/client';
import '../../App.css';

export default class Confronto extends Component {
    render() {

        const CONFRONTO = gql`
            query {
            product(product_name:"pum") {
                product_name
                type_id {
                id
                product_type_name
                }
                brand_id {
                id
                brand_name
                }
                sku
            }
            }
        `;

        return (
            <Query query={CONFRONTO}>
                {({ loading, error, data }) => {
                    var tizio = data.product[0];
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error</p>;

                    console.log(tizio)

                    return (
                        <main>
                            <div className="container">
                                <div className="left-product">
                                    CHOOSE LEFT PRODUCT:
                                </div>
                                <div className="left-product">
                                    <input></input>
                                </div>
                                <div className="left-product">
                                    LEFT PRODUCT
                                </div>
                                <div className="left-product">
                                    Nome: {tizio.product_name}
                                </div>
                                <div className="left-product">
                                    Sku: {tizio.sku}
                                </div>
                                <div className="left-product">
                                    Tipo: {tizio.type_id[0].product_type_name}
                                </div>
                                <div className="left-product">
                                    Tipo: {tizio.brand_id[0].brand_name}
                                </div>
                            </div>
                        </main>
                    );
                }}
            </Query>
        )
    }
}