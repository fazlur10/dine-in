class Offer {
  constructor(id, uniq_id, heading, description, terms, promocode, start_date, end_date, food_title, category_title, status){
    this.id = id;
    this.uniq_id = uniq_id;
    this.heading = heading;
    this.description = description;
    this.terms = terms;
    this.promocode = promocode;
    this.start_date = start_date;
    this.end_date = end_date;
    this.food_title = food_title;
    this.category_title = category_title;
    this.status = status;
  }
}
module.exports = Offer;