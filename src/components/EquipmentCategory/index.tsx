import React, { useState } from "react"

const EquipmentCategory = ({ title, data }) => {
  const [active, setActive] = useState(true)

  return (
    <div className="equipmentCategory">
      <h3
        className="equipmentsArticleYearCategory"
        onClick={() => setActive(prevState => !prevState)}
      >
        {title}
      </h3>
      {active && (
        <section className="equipmentsComputer">
          {data.map((node, index) => (
            <a
              href={node.link}
              target="_blank"
              className="equipmentsArticle"
              key={index}
            >
              <img src={node.image.fluid.src} alt={node.name} width="100%" />
              <div className="equipmentsArticleBottom">
                <h5 className="equipmentsArticleHeader">{node.name}</h5>
                <span className="equipmentsArticleSpan">{node.type}</span>
              </div>
            </a>
          ))}
        </section>
      )}
    </div>
  )
}

export default EquipmentCategory
