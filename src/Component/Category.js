import React, { Component } from "react";

export default class Category extends Component {
  getCategoryInfo() {
    let CategoryObj = {};

    let CategoryArray = [];
    this.props.Transactions.map((T) => {
      if (CategoryObj[T.category]) {
        CategoryObj[T.category] =
          Number(CategoryObj[T.category]) + Number(T.amount);
      } else {
        CategoryObj[T.category] = T.amount;
      }
    });
    for (let i in CategoryObj) {
      let cate = { [i]: CategoryObj[i] };
      CategoryArray.push(cate);
    }
    console.log(CategoryArray);

    return CategoryArray;
  }
  render() {
    let Category = this.getCategoryInfo();
    return (
      <div className="category">
        <div className="categoryHeader">
          <div className="categoryNameHeader">Category Name</div>
          <div className="categoryTotalAmount">Amount</div>
        </div>

        <div className="categories">
          {Category.map((c) => {
            return (
              <div className="categoryInfo">
                <div id="categoryName">{Object.keys(c)}</div>{" "}
                <div id="categoryAmount">{Object.values(c)}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
