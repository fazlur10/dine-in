class Food {
    constructor(id, uniq_id, food_title, category_title, description, status){
        this.id = id;
        this.uniq_id = uniq_id;
        this.food_title = food_title;
        this.category_title = category_title;
        this.description = description;
        this.status = status;
    }
}
module.exports = Food;