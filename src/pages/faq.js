import Layout from "../components/Layout/layout";
import "../assets/faq.css";
import React, { useState } from "react";
import "../assets/faq.css";
import { Col, Row } from "antd";
import { Collapse } from "antd";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: "1",
    label: "This is panel header 1",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
  {
    key: "4",
    label: "This is panel header 1",
    children: <p>{text}</p>,
  },
  {
    key: "5",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "6",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
];

const Faq = () => {
  const [activeKey, setActiveKey] = useState(null);

  const handlePanelChange = (key) => {
    setActiveKey(key === activeKey ? null : key);
  };

  return (
    <Layout>
      <>
        <div className="head-faq">
          <h1 className="title-faq">Frequently Asked Questions</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
            ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="container-faq">
          <div className="faqPage">
            
              <div className="faq-accordion-container" >
                <Row>
                  <Col span={12}>
                    <Collapse
                      accordion
                      activeKey={activeKey}
                      onChange={(key) => handlePanelChange(key)}
                    >
                      {items.slice(0, 3).map((item) => (
                        <Collapse.Panel header={item.label} key={item.key}>
                          {item.children}
                        </Collapse.Panel>
                      ))}
                    </Collapse>
                  </Col>
                  
                  <Col span={12}>
                    <Collapse
                      accordion
                      activeKey={activeKey}
                      onChange={(key) => handlePanelChange(key)}
                    >
                      {items.slice(3).map((item) => (
                        <Collapse.Panel header={item.label} key={item.key}>
                          {item.children}
                        </Collapse.Panel>
                      ))}
                    </Collapse>
                  </Col>
                </Row>
              </div>
            
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Faq;
