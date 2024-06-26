import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
    return (
        <div className="item-container">
            <Link className="blog-card" to="/blog/test">
                <div className="card-head">
                    <img src={process.env.PUBLIC_URL + "/images/blog/1.jpg"} alt="test" />
                    <div className="meta-title">Jewellery</div>
                </div>
                <div className="card-body">
                    <div className="section-author">
                        <div className="author">
                            <div className="avatar">
                                <img src={process.env.PUBLIC_URL + "/images/blog/author.jpg"} alt="author" />
                            </div>
                            <div className="author-name">Fones Mimi</div>
                        </div>
                        <div className="date">May 20, 2024</div>
                    </div>
                    <div className="card-title">
                        <h3>Early community involvement has 'meant a lot' in Atlanta as...</h3>
                    </div>
                    <div className="card-social">
                        <div className="like-and-share">
                            <div className="item like">
                                <i className="fa fa-heart-o" aria-hidden="true"></i>
                                <span>10</span>
                            </div>
                            <div className="item comment">
                                <i className="fa fa-comment-o" aria-hidden="true"></i>
                                <span>10</span>
                            </div>
                        </div>
                        <div className="item save">
                            <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </Link>
            <Link className="blog-card" to="/blog/test1">
                <div className="card-head">
                    <img src={process.env.PUBLIC_URL + "/images/blog/2.jpg"} alt="test" />
                    <div className="meta-title">Jewellery</div>
                </div>
                <div className="card-body">
                    <div className="section-author">
                        <div className="author">
                            <div className="avatar">
                                <img src={process.env.PUBLIC_URL + "/images/blog/author.jpg"} alt="author" />
                            </div>
                            <div className="author-name">Fones Mimi</div>
                        </div>
                        <div className="date">May 20, 2024</div>
                    </div>
                    <div className="card-title">
                        <h3>Early community involvement has 'meant a lot' in Atlanta as...</h3>
                    </div>
                    <div className="card-social">
                        <div className="like-and-share">
                            <div className="item like">
                                <i className="fa fa-heart-o" aria-hidden="true"></i>
                                <span>10</span>
                            </div>
                            <div className="item comment">
                                <i className="fa fa-comment-o" aria-hidden="true"></i>
                                <span>10</span>
                            </div>
                        </div>
                        <div className="item save">
                            <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </Link>
            <Link className="blog-card" to="/blog/test2">
                <div className="card-head">
                    <img src={process.env.PUBLIC_URL + "/images/blog/3.jpg"} alt="test" />
                    <div className="meta-title">Jewellery</div>
                </div>
                <div className="card-body">
                    <div className="section-author">
                        <div className="author">
                            <div className="avatar">
                                <img src={process.env.PUBLIC_URL + "/images/blog/author.jpg"} alt="author" />
                            </div>
                            <div className="author-name">Fones Mimi</div>
                        </div>
                        <div className="date">May 20, 2024</div>
                    </div>
                    <div className="card-title">
                        <h3>Early community involvement has 'meant a lot' in Atlanta as...</h3>
                    </div>
                    <div className="card-social">
                        <div className="like-and-share">
                            <div className="item like">
                                <i className="fa fa-heart-o" aria-hidden="true"></i>
                                <span>10</span>
                            </div>
                            <div className="item comment">
                                <i className="fa fa-comment-o" aria-hidden="true"></i>
                                <span>10</span>
                            </div>
                        </div>
                        <div className="item save">
                            <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </Link>
            <Link className="blog-card" to="/blog/test3">
                <div className="card-head">
                    <img src={process.env.PUBLIC_URL + "/images/blog/4.jpg"} alt="test" />
                    <div className="meta-title">Jewellery</div>
                </div>
                <div className="card-body">
                    <div className="section-author">
                        <div className="author">
                            <div className="avatar">
                                <img src={process.env.PUBLIC_URL + "/images/blog/author.jpg"} alt="author" />
                            </div>
                            <div className="author-name">Fones Mimi</div>
                        </div>
                        <div className="date">May 20, 2024</div>
                    </div>
                    <div className="card-title">
                        <h3>Early community involvement has 'meant a lot' in Atlanta as...</h3>
                    </div>
                    <div className="card-social">
                        <div className="like-and-share">
                            <div className="item like">
                                <i className="fa fa-heart-o" aria-hidden="true"></i>
                                <span>10</span>
                            </div>
                            <div className="item comment">
                                <i className="fa fa-comment-o" aria-hidden="true"></i>
                                <span>10</span>
                            </div>
                        </div>
                        <div className="item save">
                            <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </Link>
            <Link className="blog-card" to="/blog/test4">
                <div className="card-head">
                    <img src={process.env.PUBLIC_URL + "/images/blog/5.jpg"} alt="test" />
                    <div className="meta-title">Jewellery</div>
                </div>
                <div className="card-body">
                    <div className="section-author">
                        <div className="author">
                            <div className="avatar">
                                <img src={process.env.PUBLIC_URL + "/images/blog/author.jpg"} alt="author" />
                            </div>
                            <div className="author-name">Fones Mimi</div>
                        </div>
                        <div className="date">May 20, 2024</div>
                    </div>
                    <div className="card-title">
                        <h3>Early community involvement has 'meant a lot' in Atlanta as...</h3>
                    </div>
                    <div className="card-social">
                        <div className="like-and-share">
                            <div className="item like">
                                <i className="fa fa-heart-o" aria-hidden="true"></i>
                                <span>10</span>
                            </div>
                            <div className="item comment">
                                <i className="fa fa-comment-o" aria-hidden="true"></i>
                                <span>10</span>
                            </div>
                        </div>
                        <div className="item save">
                            <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </Link>
            <Link className="blog-card" to="/blog/test5">
                <div className="card-head">
                    <img src={process.env.PUBLIC_URL + "/images/blog/6.jpg"} alt="test" />
                    <div className="meta-title">Jewellery</div>
                </div>
                <div className="card-body">
                    <div className="section-author">
                        <div className="author">
                            <div className="avatar">
                                <img src={process.env.PUBLIC_URL + "/images/blog/author.jpg"} alt="author" />
                            </div>
                            <div className="author-name">Fones Mimi</div>
                        </div>
                        <div className="date">May 20, 2024</div>
                    </div>
                    <div className="card-title">
                        <h3>Early community involvement has 'meant a lot' in Atlanta as...</h3>
                    </div>
                    <div className="card-social">
                        <div className="like-and-share">
                            <div className="item like">
                                <i className="fa fa-heart-o" aria-hidden="true"></i>
                                <span>10</span>
                            </div>
                            <div className="item comment">
                                <i className="fa fa-comment-o" aria-hidden="true"></i>
                                <span>10</span>
                            </div>
                        </div>
                        <div className="item save">
                            <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </Link>

            <div className="pagination">
                <div className="item prev">
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                </div>
                <div className="item active">1</div>
                <div className="item">2</div>
                <div className="item">3</div>
                <div className="item next">
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}

export default BlogList