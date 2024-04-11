import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardBody,
  CardHeader,
  Autocomplete,
  AutocompleteItem,
} from "@nextui-org/react";
import {
  SEARCH_CLEAR,
  SEARCH_FAILURE,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
} from "../redux/actions/searchActions";
import SearchIcon from "./Icons/SearchIcon.component";
import styles from "./SearchBarPage.styles";
import fruitsAPI from "../api/FruitsAPI";

const SearchBarPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  // @ts-ignore
  const { results } = useSelector((state) => state.search);

  // const searchTermEffectHandler = async () => {
  //   if (!searchTerm) return;
  //   try {
  //     const results = await fruitsAPI.searchFruits(searchTerm);
  //     dispatch({
  //       type: SEARCH_SUCCESS,
  //       payload: results,
  //     });
  //   } catch (e) {
  //     dispatch({
  //       type: SEARCH_FAILURE,
  //       payload: e,
  //     });
  //   }
  // };

  useEffect(() => {
    if (searchTerm) {
      dispatch({ type: SEARCH_REQUEST, payload: searchTerm });

      // without saga middleware
      // searchTermEffectHandler();
    } else {
      dispatch({ type: SEARCH_CLEAR });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  const onValueChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const onClear = () => {
    setSearchTerm("");
  };

  return (
    <Card className={styles.container}>
      <CardHeader className="flex-col items-center justify-center">
        <h4 className="font-bold text-large">Fruit Search Engine</h4>
      </CardHeader>
      <CardBody className={styles.cardContainer}>
        <Autocomplete
          isClearable
          value={searchTerm}
          items={results}
          onInput={onValueChange}
          onKeyDown={(e) => e.continuePropagation()}
          label="Search"
          placeholder="Type to search..."
          clearButtonProps={{ onClick: onClear }}
          startContent={<SearchIcon className={styles.searchIcon} />}
        >
          {(fruit) => (
            <AutocompleteItem
              key={
                // @ts-ignore
                fruit.id
              }
              // @ts-ignore
              value={fruit.name}
            >
              {
                // @ts-ignore
                fruit.name
              }
            </AutocompleteItem>
          )}
        </Autocomplete>
      </CardBody>
    </Card>
  );
};

export default SearchBarPage;
