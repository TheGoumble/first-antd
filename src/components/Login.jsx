import { Form, Input, Button } from "antd"

export default function Login() {
    const handleForm = ({email, password}) => {
        alert('Form submitted with ' + email + ' and ' + password)
    }
  return (
    <>
      <h2>Login</h2>
      <Form onFinish={handleForm} labelCol={{span: 8}} wrapperCol={{span: 16}}>
        <Form.Item label="Email" name="email" rules={[{
            required: true,
            message: "Please enter a valid email"
        }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{
            required: true,
            message: "Please enter a valid password"
        }]}>
          <Input.Password/>
        </Form.Item>
        <Button type="ghost" htmlType="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}
