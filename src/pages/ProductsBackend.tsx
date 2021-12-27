import React, {useEffect, useState} from "react";
import Layout from "../components/Layout";
import Products from "./Products";
import axios from "axios";
import {Product} from "../models/product";
import {Filters} from "../models/filters";

const ProductsBackend = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filters, setFilters] = useState<Filters>({
        s: '',
        sort: '',
        page: 1,
    });

    useEffect(() => {
        (
            async () => {
                const arr = [];

                if (filters.s) {
                    arr.push(`s=${filters.s}`);
                }

                if (filters.sort) {
                    arr.push(`sort=${filters.sort}`);
                }

                if (filters.page) {
                    arr.push(`page=${filters.page}`);
                }

                const {data} = await axios.get(`products/backend?${arr.join('&')}`);

                setProducts(filters.page === 1 ? data.data : [...products, ...data.data]);
            }
        )();
    }, [filters]);

    return (
        <Layout>
            <Products products={products} filters={filters} setFilters={setFilters} />
        </Layout>
    );
};

export default ProductsBackend;