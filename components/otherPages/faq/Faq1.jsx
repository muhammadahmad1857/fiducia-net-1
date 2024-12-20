"use client";
import { useEffect, useState } from "react";
import { fetchData } from "@/data/sanityData";
import NoData from "../noData";

const Faq1 = ({ data }) => {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    const fetchFaqData = async () => {
      if (!data) {
        const fetchedData = await fetchData("faqs");
        setFaqData(fetchedData);
      } else {
        setFaqData(data);
      }
    };

    fetchFaqData();
  }, [data]);

  if (faqData.length === 0) {
    return <NoData />;
  }

  return (
    <div className="accordion" id="accordion">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="accordion-item mb-3 wow fadeInUp"
          data-wow-delay=".3s"
        >
          <h5 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#faq${index + 1}`}
              aria-expanded="true"
              aria-controls={`faq${index + 1}`}
            >
              {item.question}
            </button>
          </h5>
          <div
            id={`faq${index + 1}`}
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq1;
