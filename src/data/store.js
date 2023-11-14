import { reactive } from "vue";
export const store = reactive({
  cardsList: [],
  apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
  queryStringPage: "?num=39&offset=0",
  queryStringType: "&archetype=",
  typeList: [],
  loading: true,
});
