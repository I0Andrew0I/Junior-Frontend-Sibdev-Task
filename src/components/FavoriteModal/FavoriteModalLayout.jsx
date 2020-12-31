import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Slider, InputNumber, Row, Input, Modal, Button, Select } from "antd";
import { Option } from "antd/lib/mentions";
import { message } from "antd";
import "./FavoriteModal.scss";

const FavoriteModalLayout = ({
  favorite,
  id,
  setId,
  sortByList,
  searchQueryAdd,
  saveFavorite,
  addFavorite,
}) => {
  const [searchQuery, setSearchQuery] = useState(
    favorite.searchQuery || searchQueryAdd
  );
  const [name, setName] = useState(favorite.name || "");
  const [maxResultsCount, setMaxResultsCount] = useState(
    favorite.maxResultsCount || "20"
  );
  const [sortBy, setSortBy] = useState(favorite.sortBy || "none");

  const handleOk = () => {
    if (name === "") {
      message.error("Введите название");
      return;
    }
    if (searchQueryAdd) {
      addFavorite(searchQueryAdd, name, maxResultsCount, sortBy);
    } else {
      saveFavorite(id, searchQuery, name, maxResultsCount, sortBy);
    }
    setId(null);
  };
  const handleCancel = () => {
    setId(null);
  };
  const onMaxResultsCountChange = (value) => {
    setMaxResultsCount(value);
  };

  useEffect(() => {
    if (!searchQueryAdd) {
      setSearchQuery(favorite.searchQuery);
      setName(favorite.name);
      setMaxResultsCount(favorite.maxResultsCount);
      setSortBy(favorite.sortBy);
    }
  }, [id]);

  return (
    <Modal
      style={{ borderRadius: "50px" }}
      visible={id}
      onCancel={handleCancel}
      footer={false}
      closable={false}
      className="favorite-modal"
    >
      <div className="favorite-modal__label">Сохранить запрос</div>
      <div className="favorite-modal__input">
        <div className="favorite-modal__input__label">Запрос</div>
        <Input
          className="favorite-modal__input__field"
          placeholder="Введите запрос"
          value={searchQueryAdd || searchQuery}
          onChange={({ target }) => setSearchQuery(target.value)}
          disabled={Boolean(searchQueryAdd)}
        />
      </div>
      <div className="favorite-modal__input">
        <div className="favorite-modal__input__label favorite-modal__input__label__need">
          Название
        </div>
        <Input
          className="favorite-modal__input__field"
          placeholder="Укажите название"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
      </div>
      <div className="favorite-modal__input">
        <div className="favorite-modal__input__label">Сортировать по</div>
        <Select
          defaultValue={""}
          className="favorite-modal__input__select"
          onChange={(value) => setSortBy(value)}
        >
          {sortByList.map((item) => (
            <Option value={item.value}>{item.label}</Option>
          ))}
        </Select>
      </div>
      <div className="favorite-modal__input">
        <div className="favorite-modal__input__label">
          Максимальное количество
        </div>
        <Row className="favorite-modal__input__field">
          <Slider
            className="favorite-modal__input__field__slider"
            min={1}
            max={50}
            onChange={onMaxResultsCountChange}
            value={maxResultsCount}
          />
          <InputNumber
            className="favorite-modal__input__field__field"
            min={1}
            max={50}
            value={maxResultsCount}
            onChange={onMaxResultsCountChange}
          />
        </Row>
      </div>
      <div className="favorite-modal__buttons">
        <Button
          className="favorite-modal__buttons__button"
          onClick={handleCancel}
        >
          {searchQueryAdd ? "Не сохранять" : "Не изменять"}
        </Button>
        <Button
          type="primary"
          className="favorite-modal__buttons__button"
          onClick={handleOk}
        >
          {searchQueryAdd ? "Сохранить" : "Изменить"}
        </Button>
      </div>
    </Modal>
  );
};

FavoriteModalLayout.propTypes = {
  favorite: PropTypes.shape({
    searchQuery: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    sortBy: PropTypes.string.isRequired,
    maxResultsCount: PropTypes.number.isRequired,
  }),
  id: PropTypes.number.isRequired,
  setId: PropTypes.func.isRequired,
  sortByList: PropTypes.arrayOf({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
  searchQueryAdd: PropTypes.string,
  saveFavorite: PropTypes.func.isRequired,
  addFavorite: PropTypes.func.isRequired,
};

FavoriteModalLayout.defaultProps = {
  favorite: {},
};

export default FavoriteModalLayout;
