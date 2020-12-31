import React from "react";
import PropTypes from "prop-types";
import { Slider, InputNumber, Row, Input, Modal, Button, Select } from "antd";
import { Option } from "antd/lib/mentions";
import { message } from "antd";
import "./FavoriteModal.scss";

const FavoriteModalLayout = ({
  id,
  setId,
  searchQuery,
  setSearchQuery,
  name,
  setName,
  maxResultsCount,
  setMaxResultsCount,
  sortBy,
  setSortBy,
  isAdd,
  onChange,
  onAdd,
  sortByList,
}) => {
  const handleOk = () => {
    if (name === "") {
      message.error("Введите название");
      return;
    }
    if (isAdd) {
      onAdd();
    } else {
      onChange();
    }
    setId(-1);
  };
  const handleCancel = () => {
    setId(-1);
  };
  const onMaxResultsCountChange = (value) => {
    setMaxResultsCount(value);
  };
  const visible = Number(id) > -1;
  return (
    <Modal
      style={{ borderRadius: "50px" }}
      visible={visible}
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
          value={searchQuery}
          onChange={({ target }) => setSearchQuery(target.value)}
          disabled={isAdd}
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
          value={sortBy}
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
          {isAdd ? "Не сохранять" : "Не изменять"}
        </Button>
        <Button
          type="primary"
          className="favorite-modal__buttons__button"
          onClick={handleOk}
        >
          {isAdd ? "Сохранить" : "Изменить"}
        </Button>
      </div>
    </Modal>
  );
};

FavoriteModalLayout.propTypes = {
  id: PropTypes.number.isRequired,
  setId: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  maxResultsCount: PropTypes.string.isRequired,
  setMaxResultsCount: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
  setSortBy: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  isAdd: PropTypes.bool.isRequired,
  sortByList: PropTypes.arrayOf({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
};

export default FavoriteModalLayout;
