import { Button, Form, Input, notification } from "antd";
import React, { useState } from "react";
import { RxRocket } from "react-icons/rx";
import { Bounce, Fade } from "react-reveal";
import emailjs from "emailjs-com";
import contact from "../../../assets/contact.png";

const MesageSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const sendEmailRequest = async (data) => {
    setIsLoading(true);
    await emailjs
      .send("service_r6f0n3c", "template_c8ab9cj", data, "uCYvyy2Mprs9NYP5Y")
      .then(
        (result) => {
          notification.success({
            message: "Success!",
            description: `${result.text}, request sent successfully, response to be received within 24hours.`,
          });
        },
        (error) => {
          notification.error({
            message: "Error!",
            description: error.text || "error sending request, please retry.",
          });
        }
      );
    setIsLoading(false);
  };
  return (
    <Bounce bottom>
      <div
        id="message"
        className="w-full bg-[#EDEDED] rounded-xl shadow-xl p-5 md:p-10 space-y-5 pt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-32 items-center"
      >
        <div className="">
          <Fade bottom>
            <div>
              <p className="text-xl font-bold">
                Let’s Discuss Your AI Transformation!
              </p>
              <p className="text-sm font-normal !mb-5">
                Ready to automate and scale with AI? Talk to our experts today.
              </p>
            </div>
          </Fade>
          <Form
            onFinish={sendEmailRequest}
            layout="vertical"
            className="grid grid-cols-1  gap-x-5 gap-y-5 md:gap-x-10"
          >
            <Form.Item label="Full Name" name="full_name" className="!m-0">
              <Input size="large" placeholder="Enter full name" required />
            </Form.Item>
            <Form.Item label="Email" name="email" className="!m-0">
              <Input
                size="large"
                placeholder="Enter email"
                type="email"
                required
              />
            </Form.Item>
            <Form.Item label="Message" name="message" className="!m-0">
              <Input.TextArea
                size="large"
                placeholder="Enter message full description"
                required
                rows={5}
              />
            </Form.Item>
            <Button
              loading={isLoading}
              className="bg-blue !m-0 !py-4 flex justify-center items-center"
              htmlType="submit"
              type="primary"
              size="large"
              icon={<RxRocket />}
            >
              Take off from here
            </Button>
          </Form>
        </div>
        <div className="w-fit hidden lg:block">
          <img
            src={contact}
            alt="Contact us"
            className="max-h-[500px] object-cover"
          />
        </div>
      </div>
    </Bounce>
  );
};

export default MesageSection;
