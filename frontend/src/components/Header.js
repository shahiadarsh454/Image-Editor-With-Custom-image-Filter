import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-blue bg-dark">
    {/* Container wrapper */}
    <div className="container">
      {/* Navbar brand */}
      <a className="navbar-brand me-2" href="/homepage">
        <img
          // src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAB0VBMVEX///8gHTXQDGCqzzcAACK9vMEOCCqJiJAAAB/My88fGzT6+vuaHUW6ub4KACgcGTICACaop62Yl54uK0EUEC3X19pranbs7O4AACBiYWwVHTT4/f2fHUb9/vrw7/H6/PSgygAjwbmgn6axsLYAABWTAC/b6rLr+fjn8c1EQlOkzB3g7b4AnJcAABvs2+Dk78bw9t/M7uzPAFrF3oLU5qTx4+fhxs6PACfMmqnt9dnXtr/nz9YAAABDHTkxHTe15+SWADmP3NgYEDV9fIfb9PKx00wAmZy4115JycK/23HJ4IvGj566dYnSqrWpTmmEAAuvX3eLABusWnXBhJWhN1imQ2BFACpqHT9QT157HUFZHTyLHkMzACfHsZ2NaXxIHTqzn6iJy8pgRVieiZWe4uIRNEYfU1wjr6ogACmaMzyqbWBdgYiMFjTt6dsuNChx1s8sLTWYuyhugzYfJhyZnZYQADVZaTZ9MVGCx12LxztvfYUSvqmIzoPM6s3Eq4UOnYhUZnNQoXZSsXqS1bBdm6NztWOeX4BhxYLolrJkAC2OxTFMxJ2l1GTed5uvuTavozSykTDGd1y5O26/RGOlElTFXlXFlmp6AEC4AE+9xqoAeHnemcY7AAAN4klEQVR4nO2biX8axxXHFwFCsCAE5pBYWA5xeUEIxGGBYgEGdCDJR2THkt3GcaNGbdJGidu0SdPciZumSdOkaeP2r+1cLHtxREICufP9xMru7ADz2zfz3pvZWYahUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUyqTCjrsBFMr/IcWd3WL/GqXKxbTknNiLXbvJ963B37mVuaDGnAelvcqaqpAt3X5RclocIJBduyT+lxVNuXZ7t1fH3LutVdi/E0wuO6Vxt+C8KfbofMUBnuny8xwo3BnsOdjLOvRE+AEi+VPFyGDyNJ86F9Zu7j1XOTi/p1XKwtISGXN8j14J7kLmMnTY3tZiyaWK5k1gmN1M5s7Nc2jRWFGkOLx/Z0wNGTH8LrLmTgUHi06qxyoyusvQYyH8aveYJf1Tkr6WimK2w78o7+FDBJqJgO+da4NEp3Jrtefly0upsreLdK2CQFh6zhJWFC92V/lBkygAW9GqU1ENzkD87M0aITgiojRNlZAq2l66dW1fZV/2mjqc5IMjatwIyUDr7EsVVUoMqxyQpVJGPUb3bvYIppPO6vChfuI9U3G3M7xkweCyz6KkM3yxc1ZGEu6Anylf5EDU9H8IttJNTKWsahpPrAg+ldlXf6x0tzPjKjOBUPmnNvP07D1UtXdNohnHCH5g7snfsxJR7D7D3I3hoZeRCLXW7onHgfbpGnsGeLZ/FB+Yb2bu1Lp11q7FkPu8Jw0Ut+9gG7YvPlKwa2CGOCieF8U/crnicpV03YpfRWJKsdqu9HfQ3+XAWdp6OvghfCLuptgIldjdPfF+9HWo92IZt9lmM5rd3bJCr8rmRYRXVui19cU8uOX7g6uoyNyurEl0KSdQhCLD2mr+l5bmDQbD/FL0isk44GtNUVDT8IK80bYXDH1YOhjYWPZM2QbpmJohhLUuLBnWr/t0uuv3rf51nX16fqbh1agoYprWAWbkCo0GXR9cC2dpvgaKEVS6RZzjqtqK5gOXy4Ja4Tv0+/0PfPBwOurpo3ESFOaDy9LlwOIOUlZVV2Q9URdSB/9Yrj889PlIkwzOnt8+ZoUlnuFOmGxIP0TdNbMLNdb3CJtO51t/eIib5Hv0s6u9zDgJNmRSgvDzwbVeNtjR7z/y+x/qXK7pOZfV7z9EYtf9/pfm3Nof66fQNafJzMgVMvlNiRPd39Ws4yQCfQ/9Vv9LBw2T82Vw8NCAx6TVf3+pKzEgif59FLo8Dm1sI9CUqHfHWTDULa82mbU7HU9cse6IzsYZffAAK6xZrTGUKZVi1tqLjblZ33W/1Wr1H0ZFieXUUApne4/eM1MNnyS6Z2Umx+Ej7oQIRyL3a7UYeXRqjOrWD9eh49S9Yo0RK+/G7hWDceesFeFfn9Mai2NS2KGJ/3ci1YsvQKWrNWsNZ6CPZy3IhVpmGqxk1QMvP1ZqWOF911XVDxTGrVBCNaco4JhMLXYXqdn/BR6DdoPWCNkhCg99BpPiUrw1QQpVgJ7LEmu9OosEWgzSdrI75FncrqhQNyN3qNlQfjIUNpV9tAMxKzuN8hjLkqyZ/G6RCWZBjr5KFD5SRbJ4KHlOCtU7TQZQPdIsJv4nMo9MqJG4LKcYnmexp7HC0BiVGTFVOC9PM8yyCydLy/JZYK8mUqQcjwnul6/BYWhX+pFkJ+pVrsHIuI5DnPJ3JqKXApcX2hSPOwqJAZmEI338K2ye7IfduW/x5q/F9YO126/7HXPI0EvKZYMJUdgWBGQQpKoO/uWaXLMTTN640UkWE7+xXiM5wG9jfmtMDBuFLMtYkL81LMJzMD47TIbCRLWN5+jIfsR4uTqJlq+hCQVMyhKv1DprV6+DgVeTTUOds91uKpmQTYZCGdVcFWisc4k6PndHoR91XYHH3UXIm2DoxWQTSG9UB12uQfF1E6YQWI07SiQ4aRkcYC7dmw1w9cTIdhZk1mqxBYf8wzr7WxZsayn9FEZGLmAoONBVxeCR4xJvuHT2N99+282wiZOjKrPMZNGQZTPVLWkcTbYbbz0BI9agWLjpo9B+1aOgcX6yRDj5aX2LWQAKf/d7IIksB8MoEcijI2lgaWUjc9AlzSkM029+aHfJmVYntqOjSqRVkV1ykrZftVuWkIMkK1QZ4EGTcPU+23WYyU6zb9yYVuSmP2WOrwq5Z4A74khvQ2fwv0SCkWdvJCW4ap9HZgEX41lQ6H4srdTcgrcGKTTP69558oe5CVGYqDLtkCA2s1MKj5vymuwf51CyuRUmVU/CoEbuBNm8zNTDYn3z/I0nevvseBRmhZByd12i9e57YuOy0gvkX8eiV31oYisqrwLbZsNhdDXJcIly58M2ww39k3dwCCiIs/wLUrgsCLJdBKB5XGpzWTzPS0J0jog7CteRCs+f1N9XOHlf/HAQfzZQds7a37yhm0MxJCWOgL4rUTNyoldOrTCo35Y+GuI0FkPVcIF4GYxPkxkMvpSefH45iBZzcn8Ogp4qnZEU4h7gdFVa+q5ENdxKTqHtLLTBBDZcNwMXmtMLeGEDPkQDGgPwhm2Ft2TVDWgWGVUs1kxYTgMhuWl2tdhNLzdTTDOdhkcJpgyymtYHcMUwkcN9AQ9Y8wwaSnbF102gQsRJ9cMYWoTCzwWBmnT6IxgmsL+ph+v5ONMMh6HEXBhlsB4X7nmKb5pUhfDpNVSYev8DdFY9/viTTzeAxAQ0GBcOw9jxGVa4FQ6fwMTboiFlMhWmCtBuq2gLyvJ2AHZbIOm4tpFOHzfxjOMoDJ0MtwVjRh3IBUqxCe0u5bdNoMJ4SGgpn8mD/rhhTafTGxvH2bgk7sA+CwWGT8xLOu1Gj19hKq8oaOn1wqai7Dh9vABN+OnX+hAYmSnsgqpoqRwKPN5aRzN8i0G192E8CqUTiMKy4iIUqNgWk0tDNj75Sg8uFsSH9jBbbzbBMPx85WPUR3Vz6jaPR2Gv9VFEcluS4OGnSI9h/9z4QtBDBIX8Zvjpygp+pGjXqVf5gELfg0cTNQ47FMqFLLOMks5E+qMvPn1XT/gLmfmiFJxhv1xZmZp6hBRGNTZRmKbhA/G/jkVhErkMab6aRyfFVdWmsNxX+q86AoW/hb+GaedJGOQ0a99AfVNTcO+CTvXYAmKaXvdbrbHxKET+IhBU7vW5e21vX7mZ43FaLyp8T/j7t//47punLz/9fgXrm5qCDZ7W3CSCFfrlHuhifWkoJI8NGbK3S0qg/BkZhPpvv/snUrWyIsqbmvoBmLDHEgTopff9tVV5tooVTl+MwrwQysoK+B31bpxsEtQDAr/915QmwNHMHWg/S4CeZn09qtVLLbormuhUjwbORLKl2rCl/QJbW9D30AdMaFnq1ap+80OLXZPR78UgiEvxWGFWkdgkPvj3irbAZz4XXszXYiJ2m2CCQkF+KigqcMyXK1oan7miC703RY1PYTyusV9SsociG5KlbkEkHwY/pcgfXzjoNzUfm8JNQdDYCCVNV+T+J9mJm5Xvu050ZeXZj3ZT3417QKEFoFJo6cNIFKaAZxSyg+shuDCa92+S+mzpy+9hsHj2w9NXFweurJhmpgEKX2qLTvfBMAqFhZ+isAqmf6k8SlGb4vNTnuP6fUaExWiX9mLIhvWjHAIKOyfB9rZygiEDPixtoQVXMBNW6prAF4Ew8VZLVNUCBh20TTuLHW1VuQ6Znay3uXoAe6x0SXzY3jv5BInltgUBvQoCXUmgILqUbb1WD3SAHFrbEzilXofb2uo7CyUAB+SG2ek5vaMq9rB4AWmC7/RshjoxEe/PaNY5+aOaSP/g0OEoHK4PrsWS+ZbX0b/eKdF8w0UvbOODVhypBtPcphEZx+s1wjsNFdrgi4v4lHGIu/XNwLpe1sgz8C2FZnjjNROcMvEmkxuGCrfJ2TEUKEK3yW2GCnkzwzsa8Et4Iyz2mp2jXNzv9sMAjvbLLbnrqOZ4jzkCOhJ/YHMvsFhhA7TjwOiGndXpZRZJrHOAhnkibo/THQG3gDOierBHO+HHTfgU0sCHzkW3E5R6Iwy7aALfYW6Y4d1yjyZnK0Mdge1WaLOjsRVSv/YSBPaswv2WDR41cfE/XYVOLGnBuLhInms7wBUwwwCCceczm0Fb3Q5cdzFis3mwEd0Nm63hZlj4LSbcQ1Ev9eD74R70BsdAAuXteDaIhOWBE4VdFUrbFPunVCL5YaCFj6DGdxUewVK2wXu9bFdhQ1TILpi9HmQh5EscZq+XzPPNDq/Xi6+wUoUN/O/MCoObgl4QsOngrHabWd5EGWpLr71jH9oQjCjeKVf433AV2rDhZXi3lkJgHh4ua3jcXlMEW4vUg8ZzswzrgebESkUbwrKz7vLexssRaOIQAFrbqRCyI/Cd2omN1+O2QYdAFNqAJVDPqzIR0GTWaXIS2xhlChmbaRF5SKMNamDMJtEluU0mOJ00NyIReCtAMQunJ2aTO7II/c8ZFcbJggvKUYKFAkhRyTJGr7SGXzzLb9pgD9W+JMk/vQ5w7B2QxydbQs8XyCRskyWz7uyvcK6JFzDYKF4uYGCP0+uHeUm1o7A1mp+9QKDXEIawRlYgy54TOynoBeikwlCtzpOBeCkmBXKSqeHM0oYSBY3o9/xQbm+3CwX1HOnS9dshaZPErZ0PXT7vMwxBEvCZbPB8w8b42Aw9p8K6jOFNegqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFMLv8DrlS3kOCltmQAAAAASUVORK5CYII"
          height={50}
          alt=" Image Editor with Custom image Filter "
          loading="lazy"
          style={{ marginTop: "-1px" }}
        />
      </a>
      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarButtonsExample"
        aria-controls="navbarButtonsExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarButtonsExample">
        {/* Left links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/editor">
              Editor
            </NavLink>
          </li>

        
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/aboutus">
              Aboutus
            </NavLink>
          </li>
</ul>
        </ul>
        {/* Left links */}
        <div className="d-flex align-items-center">
          <NavLink className="btn btn-primary" to="/login" >
            Login
          </NavLink>
          <NavLink className="btn btn-danger me-3" to="/signup">
            Sign up for free
          </NavLink>
          <a
            className="btn btn-dark px-3"
            href="https://github.com/mdbootstrap/mdb-ui-kit"
            role="button"
          >
            <i className="fab fa-github" />
          </a>
        </div>
      </div>
      {/* Collapsible wrapper */}
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>

  )
}

export default Header