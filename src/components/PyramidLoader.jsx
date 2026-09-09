import './PyramidLoader.css'

export default function PyramidLoader() {
  return (
    <div className="pyramid-scene" aria-hidden="true">
      <div className="pyramid-aura" />
      <div className="pyramid-grid" />
      <div className="pyramid-loader">
        <div className="pyramid-wrapper">
          <span className="pyramid-side pyramid-side1" />
          <span className="pyramid-side pyramid-side2" />
          <span className="pyramid-side pyramid-side3" />
          <span className="pyramid-side pyramid-side4" />
          <span className="pyramid-shadow" />
        </div>
      </div>
      <span className="pyramid-orbit pyramid-orbit-a" />
      <span className="pyramid-orbit pyramid-orbit-b" />
      <span className="pyramid-label pyramid-label-a">SYSTEM / 01</span>
      <span className="pyramid-label pyramid-label-b">AI · FULL STACK</span>
    </div>
  )
}
