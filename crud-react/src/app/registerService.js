const PRODUCTS = '_PRODUCTS';

export function validateError(errors) {
  this.errors = errors;
}

class ProductService {
  validate = (product) => {
    const errors = [];

    if (!product.name) {
      errors.push('O campo Nome é obrigatório.')
    }

    if (!product.sku) {
      errors.push('O campo SKU é obrigatório.')
    }

    if (!product.provider) {
      errors.push('O campo Fornecedor é obrigatório.')
    }

    if (!product.price || product.price <= 0) {
      errors.push('O campo Preço deve ser maior do que zero (0).')
    }

    if (errors.length > 0) {
      throw new validateError(errors);
    }
  }

  search = () => {
    const products = localStorage.getItem(PRODUCTS);
    if (!products) {
      return []
    }
    return JSON.parse(products)
  }

  searchIndex = (sku) => {
    let index = null;
    this.search().forEach((product, i) => {
      if (product.sku === sku) {
        index = i;
      }
    })
    return index;
  }

  delete = (sku) => {
    const index = this.searchIndex(sku);
    if (index !== null) {
      const products = this.search();
      products.splice(index, 1);
      localStorage.setItem(PRODUCTS, JSON.stringify(products));
      return products;
    }
  }

  save = (product) => {
    this.validate(product);

    let products = localStorage.getItem(PRODUCTS);

    if (!products) {
      products = [];
    } else {
      products = JSON.parse(products);
    }

    const index = this.searchIndex(product.sku)
    if (index === null) {
      products.push(product);
    } else {
      products[index] = product;
    }

    localStorage.setItem(PRODUCTS, JSON.stringify(products));
  }
}

export default ProductService