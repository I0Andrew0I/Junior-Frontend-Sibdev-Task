import React from "react";
import PropTypes from "prop-types";
import { Slider, InputNumber, Row, Input, Modal, Button, Select } from "antd";
import { message } from "antd";
import "./FavoriteModal.scss";
const { Option } = Select;

const FavoriteModalLayout = ({
  fields,
  isAdd,
  onChange,
  onAdd,
  sortByList,
}) => {
  const { id, searchQuery, name, maxResultsCount, sortBy } = fields;
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
    id.setValue(-1);
  };
  const handleCancel = () => {
    id.setValue(-1);
  };
  const onMaxResultsCountChange = (value) => {
    maxResultsCount.setValue(value);
  };
  const visible = Number(id.value) > -1;
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
          value={searchQuery.value}
          onChange={({ target }) => searchQuery.setValue(target.value)}
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
          value={name.value}
          onChange={({ target }) => name.setValue(target.value)}
        />
      </div>
      <div className="favorite-modal__input">
        <div className="favorite-modal__input__label">Сортировать по</div>
        <Select
          defaultValue={""}
          value={sortBy.value}
          className="favorite-modal__input__select"
          onChange={(value) => sortBy.setValue(value)}
        >
          {sortByList.map((item) => (
            <Option key={item.value} value={item.value}>
              {item.label}
            </Option>
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
            value={maxResultsCount.value}
          />
          <InputNumber
            className="favorite-modal__input__field__field"
            min={1}
            max={50}
            value={maxResultsCount.value}
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
  fields: PropTypes.objectOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      setValue: PropTypes.func.isRequired,
    }).isRequired
  ),
  onChange: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  isAdd: PropTypes.bool.isRequired,
  sortByList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
};

FavoriteModalLayout.defaultValue = {
  searchQuery: "",
  sortBy: "",
};

export default FavoriteModalLayout;
