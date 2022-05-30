import React, { useRef, useState } from "react";
import {
  message,
  Button,
  Card,
  Form,
  Input,
  InputNumber,
  Checkbox,
} from "antd";
import emailjs from "@emailjs/browser";
const { TextArea } = Input;

const OrderForm = (props) => {
  const [options, setOptions] = useState([]);
  let optionsArr = [
    "Дербент",
    "Лунь",
    "Сулкаский Каньон",
    " Бархан Сарыкум",
    "Гоор",
    "Гамсутль",
    "Восхождение на гору Пабаку",
    "Карадахская Теснина",
    "Водопад Тобот",
    "Водопад Салтинский",
  ];

  const nameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  const descriptionRef = useRef();
  const valRef = useRef(1);
  const optionsRef = useRef();

  function sendEmail(e) {
    message.loading({ content: "Loading...", key: "updatable" });

    let order = {
      name: nameRef.current.state.value,
      number: numberRef.current.state.value,
      description: descriptionRef.current.resizableTextArea.props.value,
      email: emailRef.current.state.value,
      val: valRef.current.value,
      tour: props.value.name,
      options: props.value.id === 4 ? options : null,
    };
    if (
      nameRef.current.state.value.length <= 1 ||
      numberRef.current.state.value.length < 10
    ) {
      message.error({ content: "Заполнены не все поля", key: "updatable" });
    } else {
      emailjs
        .send("gmail", "template_448do7j", order, process.env.REACT_APP_API_KEY)
        .then(
          (result) => {
            console.log(result.text);
            message.success({ content: "Заявка отправлена", key: "updatable" });
          },
          (error) => {
            console.log(error.text);
            message.error({
              content:
                "Заявку не удалось отправить, свяжитесь с нами через контакты",
              key: "updatable",
            });
          }
        );
    }

    console.log(order);
  }
  return (
    <Card className="order-form" title="Заказать обратный звонок" hoverable>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={sendEmail}
      >
        <Form.Item
          label="Имя"
          rules={[{ required: true, message: "Пожайлуста введите имя" }]}
        >
          <Input ref={nameRef} />
        </Form.Item>
        <Form.Item
          label="Email"
          rules={[{ required: true, message: "Пожайлуста введите email" }]}
        >
          <Input ref={emailRef} />
        </Form.Item>
        <Form.Item
          label="Номер телефона"
          rules={[{ required: true, message: "Пожайлуста введите номер" }]}
        >
          <Input ref={numberRef} />
        </Form.Item>
        <Form.Item label="Количество гостей">
          <InputNumber ref={valRef} defaultValue={1} min={1} max={10} />
        </Form.Item>
        <Form.Item label="Пожелания">
          <TextArea ref={descriptionRef} />
        </Form.Item>
        {props.value.id === 4 ? (
          Object.values(props.value.programDesc).map((tour, index) => {
            return (
              <Form.Item
                name={tour.id}
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 0 }}
                style={{ marginBottom: 0 }}
              >
                <Checkbox
                  onChange={(e) => {
                    setOptions((prev) => {
                      if (e.target.checked) {
                        prev.push(optionsArr[index]);
                      } else {
                        prev.filter(function (f) {
                          return f !== optionsArr[index];
                        });
                      }
                      return prev;
                    });
                  }}
                >
                  {tour.id}
                </Checkbox>
              </Form.Item>
            );
          })
        ) : null}

        <Form.Item
          style={{ marginTop: "20px" }}
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default OrderForm;
