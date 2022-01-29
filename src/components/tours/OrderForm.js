import React, {useRef} from 'react';
import {message, Button, Card, Form, Input, InputNumber} from "antd";
import emailjs from '@emailjs/browser';

const OrderForm = (props) => {
    const nameRef=useRef()
    const emailRef=useRef()
    const numberRef=useRef()
    const valRef=useRef(1)

    function sendEmail(e) {

        let order = {
            name:nameRef.current.state.value,
            number:numberRef.current.state.value,
            email:emailRef.current.state.value,
            val:valRef.current.value,
            tour:props.value.name
        }


        console.log(order)
        message.loading({ content: 'Loading...', key:'updatable' });



        emailjs.send('gmail', 'template_448do7j', order, process.env.REACT_APP_WEATHER_API_KEY)
            .then((result) => {
                console.log(result.text);
                message.success({content:'Заявка отправлена',key:'updatable'});
            }, (error) => {
                console.log(error.text);
                message.error({content:'Заявку не удалось отправить, свяжитесь с нами через контакты',key:'updatable'});
            });


    };

    return (
        <Card className='order-form'
              title='Заказать обратный звонок'
              hoverable>
            <Form
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                initialValues={{remember: true}}
                autoComplete="off"
            onFinish={sendEmail}
            >

                <Form.Item
                    label="Имя"

                    rules={[{required: true, message: 'Пожайлуста введите имя'}]}>
                    <Input ref={nameRef}/>
                </Form.Item>
                <Form.Item label='Email'
                           rules={[{required: true, message: 'Пожайлуста введите email'}]}>

                    <Input ref={emailRef}/>
                </Form.Item>
                <Form.Item
                    label='Номер телефона'
                    rules={[{required: true, message: 'Пожайлуста введите номер'}]}>

                    <Input ref={numberRef}/>
                </Form.Item>
                <Form.Item label='Количество гостей'
                >
                    <InputNumber ref={valRef}  defaultValue={1} min={1} max={10}/>
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary"
                            htmlType='submit'>
                        Отправить
                    </Button>
                </Form.Item>
            </Form>

        </Card>
    );
};

export default OrderForm;